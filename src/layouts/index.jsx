import { Outlet } from 'umi';
import { Layout, Row, Col } from 'antd';
import Header from '@/layouts/components/Header';
import styles from './style.less';

export default () => {
  return (
    <Layout className={styles.container}>
      <Layout.Header className={styles.header}><Header /></Layout.Header>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  )
}
