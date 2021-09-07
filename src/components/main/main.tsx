import React, { FunctionComponent, useEffect, useState } from 'react';
import Fuse from 'fuse.js';

import Faqview from '../faqview/faqview';
import Faqlist from '../faqlist/faqlist';
import Faqbox from '../faqbox/faqbox';

import { getDataPromise } from '../../services/getData';
import { Question, Group, Groups, Item } from '../../types/types';

import styles from './main.module.scss';
import Faqcolumn from '../faqcolumn/faqcolumn';

const Main: FunctionComponent<{ query: string }> = ({ query }) => {
  const [data, setData] = useState<Item[]>([]);
  const [groups, setGroups] = useState<Groups>({});

  useEffect(() => {
    getDataPromise.then((data) => {
      const questionsData = data.questions.map((question: Question) => ({
        ...question,
        group:
          data.groups.left.find(
            (group: Group) => group.id === question.groupId
          ) ||
          data.groups.right.find(
            (group: Group) => group.id === question.groupId
          ),
      }));
      const groupsData = data.groups;
      setData(questionsData);
      setGroups(groupsData);
    });
  }, []);

  const options = {
    useExtendedSearch: false,
    threshold: 0.6,
    keys: ['title', 'content'],
  };

  const fuse = new Fuse(data, options);
  const result = fuse.search(query ? `'${query}` : ' ');
  const flatResult = result.map((item) => ({ ...item.item }));

  const renderData = Object.values(groups).map((side: Group[]) => {
    return side.map((category: Group) => ({
      ...category,
      questions: flatResult.filter(
        (question) => question.groupId === category.id
      ),
    }));
  });
  return (
    <main className={styles.main}>
      <Faqview>
        {renderData.map((column) => (
          <Faqcolumn key={renderData.indexOf(column)}>
            {column.map((item) => {
              return (
                item.questions.length > 0 && (
                  <Faqlist key={item.name} categoryName={item.name}>
                    {item.questions.map((question: Question) => (
                      <Faqbox
                        key={question.id}
                        title={question.title}
                        content={question.content}
                      ></Faqbox>
                    ))}
                  </Faqlist>
                )
              );
            })}
          </Faqcolumn>
        ))}
      </Faqview>
    </main>
  );
};

export default Main;
