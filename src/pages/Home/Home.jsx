import React, { useEffect, useCallback } from 'react';
import { Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import 'antd/dist/antd.css';
import { fetchtableData } from '../../redux/actions/home';
import { NumberData, TypeAuthor, Terminal } from '../../components';

const Home = () => {
  const dispatch = useDispatch();
  const { clientData } = useSelector(({ home }) => home);

  console.log(clientData);

  const columns = [
    {
      title: 'Номер / Дата',
      dataIndex: 'numberDate',
      key: 'name',
      render: (text) => <NumberData text={text} />,
    },
    {
      title: 'Тип задания / Автор',
      dataIndex: 'typeAuthor',
      key: 'age',
      render: (text) => <TypeAuthor text={text} />
    },
    {
      title: 'Аккаунт / Терминал',
      dataIndex: 'terminal',
      key: 'address',
      render: (text) => <Terminal text={text} />
    },
    {
      title: 'Статус',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        // Цыета статусов
        <>
          {tags.map((tag) => {
            let color;

            switch (tag) {
              case 'new':
                color = 'green';
                break;

              case 'started':
                color = 'geekblue';
                break;

              case 'completed':
                color = '#aa50ff';
                break;

              case 'assigned_to':
                color = '#fea41e';
                break;

              case 'declined':
                color = 'magenta';
                break;
            }

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  const data = clientData.map((item) => {
    console.log('status', item.status)

    return (
      {
        key: item.id,
        numberDate: `${item.id} ${new Date(item.created_date).toLocaleString()}`,
        typeAuthor: `${item.order_type.name} ${item.created_user.name} ${item.created_user.patronymic} ${item.created_user.surname}`,
        terminal: `${item.account.name} - ${item.terminal.name}`,
        tags: [item.status],
      }
    )
  });

  useEffect(() => {
    dispatch(fetchtableData());
  }, []);

  return (
    <Table columns={columns} dataSource={data} />
  );
};

export default Home;
