import { Row, Col, Table, Button, Divider } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import styles from './style.less';

export default () => {
  const renderSelect = (item, index) => (
    <span key={index.toString()} className={`${styles.select} ${index === 0 ? styles.active : ''}`}>
      {item}
    </span>
  );

  const columns = [
    {
      title: '达人信息',
      key: 'info',
      width: 280,
      render: (text, record) => {
        return (
          <Row className={styles.info} wrap={false}>
            <Col>
              <img className={styles.img} />
            </Col>
            <Col flex={1}>
              <div className={`${styles.name} line-clamp-1`}>Loren Gray</div>
              <div className={styles.media}>其他</div>
              <div className={styles.more}>
                <span className={styles.country} />
                <Divider type="vertical" />
                <span className={styles.icon} />
              </div>
            </Col>
          </Row>
        );
      },
    },
    {
      title: '粉丝数',
      key: 'fans',
    },
    {
      title: '带货均价',
      key: 'price',
    },
    {
      title: '带货商品数',
      key: 'count',
    },
    {
      title: '带货平均播放',
      key: 'playCount',
    },
    {
      title: '带货视频数',
      key: 'vedioCount',
    },
    {
      title: '互动率',
      key: 'hudong',
    },
    {
      title: '最近带货',
      key: 'nearly',
    },
    {
      title: '操作',
      key: 'options',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.filterBox}>
        <Row className={styles.filter}>
          <Col className={styles.label}>达人分类:</Col>
          <Col className={styles.options}>
            {['全部', '美术与工艺', '汽车与交通', '婴幼儿', '美容/时尚', '服装与配饰'].map(renderSelect)}
          </Col>
        </Row>
      </div>
      <div className={styles.contentBox}>
        <Row className={styles.header} justify="space-between" align="middle">
          <Col className={styles.title}>达人列表 (10000+)</Col>
          <Col>
            <span>统计时间:</span>
            <span className={`${styles.dateTag} ${styles.active}`}>近7日</span>
            <span className={styles.dateTag}>近30日</span>
            <Button icon={<DownloadOutlined />}>导出</Button>
          </Col>
        </Row>
        <Table
          bordered
          className={styles.table}
          columns={columns}
          dataSource={[1]}
        />
      </div>
    </div>
  );
};