import { useModel } from 'umi';
import { Row, Col, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import route from '@/config/route';
import styles from './style.less';

export default () => {
  const items = [
    {
      key: 'ZH',
      label: '简体中文',
    },
    {
      key: 'EN',
      label: 'English',
    },
  ];
  const { initialState, setInitialState } = useModel("@@initialState");
  const { lang = 'ZH' } = initialState;
  return (
    <Row className={styles.container} align="middle">
      <Col span={8}>
        <div className={styles.logo}>Creator verve</div>
      </Col>
      <Col span={8}>
        <Menu
          className={styles.menu}
          mode="horizontal"
          items={route.filter(item => item.path !== '/').map(item => ({
            key: item.path,
            label: item.name,
          }))}
        />
      </Col>
      <Col span={8} className="tr">
        <Dropdown
          menu={{
            items,
          }}
        >
          <span className={styles.lang}>{lang} <DownOutlined /></span>
        </Dropdown>
        <span className={`${styles.contact} ml24`}>联系我们</span>
      </Col>
    </Row>
  )
}
