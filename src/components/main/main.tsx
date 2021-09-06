import React, { FunctionComponent, useEffect, useState } from 'react';
import Faqview from '../faqview/faqview';

import { getDataPromise } from '../../services/getData';
import { Question, Group, Groups, Item } from '../../types/types';

import styles from './main.module.scss';

const Main: FunctionComponent = () => {
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
  console.log(data);
  console.log(groups);
  return (
    <main className={styles.main}>
      <Faqview>
        <div>main</div>
      </Faqview>
    </main>
  );
};

export default Main;
