import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import ImageMap from "image-map";

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import beach from './beach.png';
import stone from './stone.png'
import sampleImage from './contemplative-reptile.jpg';

import WaveEnergy from './波能转换装置.png';
import HaiDai from './海带养殖.jpg';
import ZhenZhu from './海水珍珠养殖.jpg';
import Track from './塑胶跑道.png';

import Barrier from './屏障岛.jpg';
import OysterReef from './牡蛎礁.jpg';
import WindEnergy from './风场.jpg';
import Plant from './爬山虎.jpg';
import BlueEnergy from './蓝色能源发电小球站.jpg';

var all_info = {
  波能收集器: {
    title: "波能收集器",
    description: "一个先进的能量收集装置",
    image: WaveEnergy,
    collapsed_info: [
      {
        title: "特征",
        description: "将运动的、潜在的波浪能转化为机械能或电能；"
      },
      {
        title: "应用价值",
        description: "1、为国家电网发展提供可再生的清洁能源； \n 2、为海上的船只、舰艇提供动力支持，增加海运的运营里程；\n3、为近岸处的海水淡化提供能源支持；"
      },
      {
        title: "存在的问题",
        description: "1、目前波能转化装置存在六种不同的种类：point absorbers, terminators, attenuators, oscillating wave surge, submerged pressure differential, and rotating mass devices。但是种类繁多反而成为阻碍它发展的原因之一，因为不同的方法之间几乎没有交叉点，故较难形成一个关于波能收集的系统理论；\n2、相对于发展较成熟的风能来说，波浪能的转换效率较低，而机械的维护成本以及电量运输费用较高；\n3、政府目前对于波浪能的资金与政策支持很少；"
      }
    ]
  },
  海带养殖: {
    title: "海带养殖",
    description: "海洋牧场构建思路之二",
    image: HaiDai,
    collapsed_info: [
      {
        title: "适宜养殖条件",
        description: "1、底质：以平坦的泥底或泥砂底为好，便于打桩下橛；\n2、水深：大干潮线下3-5米;\n3、风浪和水流：风浪较小，潮流畅通的海区为宜; 养殖区朝向以南或东南向为好;\n4、透明度：海带靠光照而长，故养殖海区以透明度大为宜; 浑水区养殖海带只能采用浅水层平养以增强光照；\n5、水质：以肥水区为好，但切忌在被工农业废水污染的水域中养殖海带。"
      },
      {
        title: "产业供应现状和主产区",
        description: "据2018年中国渔业统计年鉴，2010年以来，我国海水养殖海带产量整体呈增长趋势，截至2017年，全国海带产品总产量达148.66万吨，占我国藻类总产量的66.73%。其中，2013年全国海带总产量涨幅较大，增长率为33.73%，主要是由该年份山东省海带产量增长导致的。\n海带作为一种冷水性的大型经济藻类，自然分布于我国山东半岛地区（青岛以北）和大连沿海地区，覆盖福建、辽宁、山东、浙江、江苏、广东等省份。"
      },
      {
        title: "价格波动分析",
        description: "2018年海带价格综合销售价格为2.2元/kg（干海带），鲜菜平均价格0.46元/kg-0.48元/kg，食品菜价格0.6元/kg。在销售额方面，相比于2017年，2018年销售总额有所下滑。此外，海藻加工企业比常年收购海带减少，部分海带转化为晾干菜进入市场，进一步促进市场饱和。\n2019年期间（1月-9月），生海带采集点海带销售4.7万吨，销售收入7706.2万元，综合销售价格1.64元/kg，较2018年进一步下降。每年的5月-7月是海带的集中收获期。2019年5月-7月随着海带大规模成熟收割出塘，海带价格持续下跌。8月份海带出塘量大幅减少，价格也随之止跌回升，种植前景较乐观。"
      }
    ]
  },
  海水珍珠养殖: {
    title: "海水珍珠养殖",
    description: "海洋牧场构建思路之一",
    image: ZhenZhu,
    collapsed_info: [
      {
        title: "养殖条件",
        description: "1、水深：以1.5~3米之间为合适\n2、水温：适宜水温为15~30℃\n3、光照与通风：四周无树木和高大建筑物遮阳阻风,使水环境阳光充足,空气流通；\n4、饵料生物：主要浮游植物有,硅藻,甲藻,金藻和黄藻等；主要浮游动物有，轮虫、绕足类、枝角类及原生动物。"
      }
    ]
  },
  塑胶跑道: {
    title: "沿海步道",
    description: "点燃生命的激情与活力",
    image: Track
  }
}

var stone_info = {
  屏障岛: {
    title: "屏障岛",
    description: "又称人工水下沙坝",
    image: Barrier,
    collapsed_info: [
      {
        title: "形成机理（主要有四种）",
        description: "1、由海滩变化而来。原来曾是大陆海滩沙丘，当发生海侵时，它们逐渐与大陆分开，在海侵的最后期，屏障岛的背后地区就变成泻湖或潮坪。而屏障岛则随海平面的上升继续向上生长；\n2、在沿岸沙坝与沙嘴的基础上发展而成。沿岸沙坝除最低潮时露出海面外，通常位于海面以下，随着沉积物不断供给，在波浪和水流的作用下逐渐向上生长。但当地壳上升，海平面下降时，它们露出于水面，并遭受局部侵蚀．当海平面继续下降时，原来的沿岸沙坝便逐渐发育为屏障岛。其背后的残留海水形成泻湖；\n3、由三角洲的废弃而成。即当早期形成的三角洲在其废弃后，由于海平面的下降和波浪的改造所形成；\n4、由生物礁所形成。当生物礁的滨浅海中生长时，尤其是形成了一定的规模后，海平面的下降使其露出水面所形成。"
      },
      {
        title: "特征",
        description: "全球10%～13%的海岸带具有障壁岛(Schwartz,1971)，大多发育于海岸平原的靠海一侧，一般分布在热带地区或泥沙沉积活跃的沿海地区。有近岸障壁岛或沙嘴包围，仅存单一或多个通道与大海相连，如美国帕姆利科河口、中国海南岛小海河口。"
      },
      {
        title: "作用",
        description: "1、生态意义：可以作为沙源养护海滩，也可起到消减波浪，保护陆侧海岸的作用;\n2、其中往往蕴藏有煤、石油、天然气、岩盐和铀等多种沉积矿产，具有重要的经济意义；"
      }
    ]
  },
  牡蛎礁: {
    title: "牡蛎礁",
    description: "生态防护堤坝&生态系统工程师",
    image: OysterReef,
    collapsed_info: [
      {
        title: "定义",
        description: "由大量牡蛎固着生长于硬底物表面所形成的一种生物礁"
      },
      {
        title: "优点",
        description: "除为人类提供鲜活牡蛎以供食用外, 牡蛎礁还具有许多重要的生态功能与服务价值，包括净化水体、提供栖息地、防止岸线侵蚀等。"
      },
      {
        title: "分布",
        description: "广泛分布于温带和亚热带河口和滨海区。"
      }
    ]
  },
  风场: {
    title: "风场",
    description: "一种可再生能源技术",
    image: WindEnergy,
    collapsed_info: [
      {
        title: "优点",
        description: "不占用土地资源，基本不受地形地貌影响，风速更高，风能资源更丰富。"
      },
      {
        title: "分布",
        description: "中国海上风能资源丰富，且主要分布在经济发达、电网结构较强、又缺乏常规能源的东南沿海地区。"
      },
      {
        title: "目前困难",
        description: "海上环境气候恶劣，海浪潮汐情况复杂，海上风电机组运行运行环境恶劣，机组维护困难。"
      }
    ]
  },
  爬山虎: {
    title: "爬山虎",
    description: "一种生命力顽强的植物",
    image: Plant,
    collapsed_info: [
      {
        title: "生活环境",
        description: "爬山虎适应性强，性喜阴湿环境，但不怕强光，耐寒，耐旱，耐贫瘠，气候适应性广泛"
      },
      {
        title: "优点",
        description: "1、占地少、生长快，绿化覆盖面积大；\n2、攀缘能力强，在直立建筑物上的吸附能力强；\n3、对环境的适应能力强，耐轻度盐碱，可在适宜地区作为海滨植物种植；"
      }
    ]
  },
  蓝色能源小球发电站: {
    title: "蓝色能源小球发电站",
    description: "一种新型的潮汐能收集装置",
    image: BlueEnergy,
    collapsed_info: [
      {
        title: "基本思路与构想",
        description: "1、构建圆形的浮动装置浮于海面，利用球内的运动部分在波浪冲击下在内部摩擦产生电荷；\n2、利用浮动装置上的悬挂链增加单位体积海水所能产生的能量；\n3、可以在浮动装置上增加太阳能和风能接收装置增加电能的产出，并通过线缆将其传输至陆地上的发电厂或电网中；也可以在这些微型发电机网络旁边设置太阳能电池板和发电风机组成混合新能源电站。"
      },
      {
        title: "存在的问题",
        description: "1、纳米发电机的持久性（设计寿命是10年，之后需要人为回收）\n\t1）阳光、海水下的老化；\n\t2）浮动球内的渗水问题——新型防水材料，水下线缆的粘合剂；\n\t3）装置间的线缆必须足够抵挡风暴；\n2、纳米发电机网络的位置对渔业、航海、人类生活以及海洋生物的影响,如需要在固定的岛屿或水下山峰周围以避免被洋流冲走，同时也不能困住海洋动物；\n3、虽然与成熟的太阳能和风能发电装置，还不具备竞争能力，但是它成本低廉、装置简单;"
      },
      {
        title: "功能",
        description: "1、若每秒钟放电2~3次，每个装置就能产生约1~10微瓦的电能（1平方千米的微型发电机网路能够满足一座城镇的用电需求）\n2、容易预测，受昼夜变化和天气状况的影响波动小;"
      },
      {
        title: "实践步骤",
        description: "1、发展第一阶段需要政府提供5000万美元到1亿美元的资金支持；\n2、私营投资者和大型能源公司可以选择在实践和测试阶段介入；\n3、必须首先建立小型的试点网络，为岛屿、小发电厂或村庄提供电力；"
      }
    ]
  }
}
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  if (props.content) {
    return (
      <div>
        {
          props.content.map(single => {
            return (
              <Accordion expanded={expanded === single.title} onChange={handleChange(single.title)}>
                <AccordionSummary aria-controls={single.title + "d-content"} id={single.title + "d-header"}>
                  <Typography>{single.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {single.description.split("\n").map((i, key) => {
                      return <p key={key}>{i}</p>;
                    })}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            )
          })}
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}

function Design(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('body');
  const [display, setDisplay] = React.useState(all_info.波能收集器);

  const handleClickOpen = (displayName) => () => {
    setDisplay(all_info[displayName]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={beach} useMap="#Beach" />
      </div>
      <map name="Beach">
        <area target="" alt="波能收集器" title="波能收集器" href="#" onClick={handleClickOpen("波能收集器")} coords="182,1034,424,869" shape="rect" />
        <area target="" alt="波能收集器" title="波能收集器" href="#" onClick={handleClickOpen("波能收集器")} coords="224,678,281,834" shape="0" />
        <area target="" alt="波能收集器" title="波能收集器" href="#" onClick={handleClickOpen("波能收集器")} coords="80,510,148,663" shape="0" />
        <area target="" alt="海带养殖" title="海带养殖" href="#" onClick={handleClickOpen("海带养殖")} coords="106,483,263,401,549,754,427,872" shape="poly" />
        <area target="" alt="海水珍珠养殖" title="海水珍珠养殖" href="#" onClick={handleClickOpen("海水珍珠养殖")} coords="566,768,441,872,524,978,659,869,623,818" shape="poly" />
        <area target="" alt="塑胶跑道" title="塑胶跑道" href="#" onClick={handleClickOpen("塑胶跑道")} coords="592,233,994,725,1068,686,657,197" shape="poly" />
      </map>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        display={display}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <CardMedia
          component="img"
          image={display.image}
        />
        <DialogContent dividers={scroll === 'paper'}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {display.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {display.description}
            </Typography>
          </CardContent>
        </DialogContent>
        <CustomizedAccordions content={display.collapsed_info} />
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function StoneDesign(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('body');
  const [display, setDisplay] = React.useState(stone_info.屏障岛);

  const handleClickOpen = (displayName) => () => {
    setDisplay(stone_info[displayName]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={stone} useMap="#Stone" />
      </div>
      <map name="Stone">
        <area target="" alt="牡蛎礁" title="牡蛎礁" href="#" onClick={handleClickOpen("牡蛎礁")} coords="443,1025,598,936,248,501,153,621" shape="poly" />
        <area target="" alt="风力发电机" title="风力发电机" href="#" onClick={handleClickOpen("风场")} coords="0,65,185,574" shape="rect" />
        <area target="" alt="蓝色能源小球发电站" title="蓝色能源小球发电站" href="#" onClick={handleClickOpen("蓝色能源小球发电站")} coords="325,343,678,822,796,778,569,461,676,459,657,362,506,377,456,310" shape="poly" />
        <area target="" alt="爬山虎" title="爬山虎" href="#" onClick={handleClickOpen("爬山虎")} coords="871,497,1041,654,966,803,857,703" shape="poly" />
        <area target="" alt="屏障岛" title="屏障岛" href="#" onClick={handleClickOpen("屏障岛")} coords="216,391,613,927,552,994,569,1024,863,891,773,826,695,849,294,330" shape="poly"/>
      </map>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        display={display}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <CardMedia
          component="img"
          image={display.image}
        />
        <DialogContent dividers={scroll === 'paper'}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {display.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {display.description}
            </Typography>
          </CardContent>
        </DialogContent>
        <CustomizedAccordions content={display.collapsed_info} />
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="沙质海滩" {...a11yProps(0)} />
          <Tab label="石质海滩" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Design />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StoneDesign />
      </TabPanel>
    </Box>
  );
}

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <BasicTabs />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));