import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  
  {
    title: 'Quản lí giao dịch',
    path: '/order',
    icon: icon('ic_pay'),
  },
  {
    title: 'quản lí Account',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'quản lí sản phẩm',
    path: '/products',
    icon: icon('ic_product'),
  },
  {
    title: 'thống kê',
    path: '/',
    icon: icon('ic_analytics'),
  }
 ,
 {
  title: 'module',
  path: '/module+',
  icon: icon('ic_module'),
},
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
 
];

export default navConfig;
