import { Row, Col, Collapse } from 'antd';
import styles from './style.less';

export default () => {
  const renderCheckDom = () => (
    <div className={styles.plan}>
      <div className={styles.check} />
      <div className={styles.content}>
        <div className={styles.label}>Choose from over 5,000 US-based UGC creators</div>
        <div className={styles.tips}>
          Find creatives your audience can identify with. Get UGC that targets
          your preferred demographic and matches your vision from our massive
          pool of talented and diverse creators.
        </div>
      </div>
    </div>
  );

  const items = new Array(7).fill().map((item, index) => ({
    key: index.toString(),
    label: 'Why Billo packs?',
    children: `Billo packs provide a convenient and
    cost-effective way to access a variety of video options. Whether you need
    eCommerce videos, TikTok content, or customized Shopify videos, our packs
    offer discounted prices and increased value. With packs, you can get more
    videos while paying less, allowing you to expand your content library and
    engage your audience effectively.`,
  }));

  const logoList = [
    require('@/images/versed-1.webp'),
    require('@/images/image-38.webp'),
    require('@/images/coola-1.webp'),
    require('@/images/philips-logo-black-and-white.webp'),
    require('@/images/hellofresh-logo-black.webp'),
    require('@/images/coola-1.webp'),
    // 轮播完成防止留白
    // 怎么确定尾部需要几张防止留白，盒子宽度 / 单个图片宽度 = 一屏几张留白图
    require('@/images/versed-1.webp'),
    require('@/images/image-38.webp'),
    require('@/images/coola-1.webp'),
    require('@/images/philips-logo-black-and-white.webp'),
    require('@/images/hellofresh-logo-black.webp'),
    require('@/images/coola-1.webp'),
  ];

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Row className={styles.part}>
          <Col span={12} className={styles.col}>
            <div className={styles.title}>选择创建者, 而不是影响者</div>
            <div className={styles.text}>
              <div>你可以花几个小时与有影响力的人就每一个竞选细节进行谈判，也可以通过Billo快速订购UGC，并让数十名创作者申请。</div>
              <div>完全控制您接收的内容——现在就无风险地尝试Billo。</div>
            </div>
            <div className={styles.btnBox}>
              <span className={styles.btn}>联系我们</span>
            </div>
            <div className={styles.tips}>
              <span className={styles.count}>17,000+&nbsp;</span>
              <span>品牌和机构通过Billo投放广告</span>
            </div>
          </Col>
          <Col span={12} className={styles.col2}>
            <video
              playsInline
              width="100%"
              height="auto"
              style={{ objectFit: 'cover', backgroundColor: 'transparent' }}
              autoPlay
              muted
              loop
              preload="auto"
              src={require('@/images/HERO.mp4')}
            />
          </Col>
        </Row>
        <div className={styles.slickBox}>
          <div className={styles.slickItems}>
            {logoList.map((item, index) => (
              <div key={index.toString()} className={styles.slickItem}>
                <img
                  src={item}
                  alt="logo"
                  className={styles.slick}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.box2}>
        <div className={styles.part2}>
          <div className={styles.title}>
            Don’t burn your marketing budget on influencers
          </div>
          <div className={styles.description}>
            <div>
              Studies show that ads with faces outperform ads without them.* Luckily, you can get authentic, high-performing UGC content without the help of influencers.
            </div>
            <div>
              With Billo video creators, build more effective marketing campaigns that grab attention, convey emotion, and build trust.
            </div>
          </div>
        </div>
        <div className={styles.part3}>
          <div className={styles.title}>
            UGC video packs designed
            <br />
            to drive results
          </div>
        </div>
        <div className={styles.part4}>
          <div className={styles.title}>
            Hassle-free video ads from start to finish
          </div>
          <Row className={styles.row}>
            <Col span={12} className={styles.col}>
              {renderCheckDom()}
              {renderCheckDom()}
            </Col>
            <Col span={12} className={styles.col}>
              {renderCheckDom()}
              {renderCheckDom()}
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.box3}>
        <div className={styles.title}>Why clients love us?</div>
      </div>
      <div className={styles.FAQBox}>
        <div className={styles.content}>
          <div className={styles.title}>FAQ</div>
          <Collapse
            bordered={false}
            expandIcon={() => null}
            items={items}
          />
        </div>
      </div>
      <div className={styles.footerBox}>
        <div className={styles.content}>
          <div className={styles.title}>
            *Study by Gianluigi Guido, Marco Pichierri, Giovanni Pino, and Rajan Nataraajan
            <br />
            “Effects of face images and face pareidolia on consumers’ responses to print advertising”
          </div>
        </div>
      </div>
    </div>
  );
};
