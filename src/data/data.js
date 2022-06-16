import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  ArrowDownward,
  ArrowUpward,
  AttachMoney,
} from '@material-ui/icons'
import { Link } from 'react-router-dom'

export const sidebarMenu = [
  {
    id: 1,
    title: 'Dashboard',
    item1: 'Home',
    icon1a: <LineStyle className="sidebarIcon" />,
    outleta: 'home',
    item2: 'Analytics',
    icon1b: <Timeline className="sidebarIcon" />,
    outletb: 'analytics',
    item3: 'Sales',
    icon1c: <TrendingUp className="sidebarIcon" />,
    outletc: 'sales',
    class: 'active',
  },
  {
    id: 2,
    title: 'Quick Menu',
    item1: 'Users',
    icon1a: <PermIdentity className="sidebarIcon" />,
    outleta: 'users',
    item2: 'Products',
    icon1b: <Storefront className="sidebarIcon" />,
    outletb: 'products',
    item3: 'Reports',
    icon1c: <BarChart className="sidebarIcon" />,
    outletc: 'reports',
    item4: 'Transactions',
    icon1d: <AttachMoney className="sidebarIcon" />,
    outletd: 'transactions',
    class: 'active',
  },
  {
    id: 3,
    title: 'Notifications',
    item1: 'Mail',
    icon1a: <MailOutline className="sidebarIcon" />,
    outleta: 'mail',
    item2: 'Feedback',
    icon1b: <DynamicFeed className="sidebarIcon" />,
    outletb: 'feedback',
    item3: 'Messages',
    icon1c: <ChatBubbleOutline className="sidebarIcon" />,
    outletc: 'messages',
    class: 'active',
  },
  {
    id: 4,
    title: 'Staff',
    item1: 'Manage',
    icon1a: <WorkOutline className="sidebarIcon" />,
    outleta: 'manage',

    item2: 'Analytics',
    icon1b: <Timeline className="sidebarIcon" />,
    outletb: 'analytics',

    item3: 'Reports',
    icon1c: <Report className="sidebarIcon" />,
    outletc: 'reports',
    class: 'active',
  },
]
export const featured = [
  {
    id: 1,
    title: 'Revenue',
    money: '$2,415',
    rate: '-11.4',
    icon: <ArrowDownward className="featuredIcon negative" />,
  },
  {
    id: 2,
    title: 'Sales',
    money: '$4,415',
    rate: '-1.4',
    icon: <ArrowDownward className="featuredIcon negative" />,
  },
  {
    id: 3,
    title: 'Cost',
    money: '$2,225',
    rate: '+2.4',
    icon: <ArrowUpward className="featuredIcon" />,
  },
]
export const userData = [
  {
    name: 'Jan',
    'Active User': 4000,
  },
  {
    name: 'Feb',
    'Active User': 2000,
  },
  {
    name: 'Mar',
    'Active User': 1000,
  },
  {
    name: 'Apr',
    'Active User': 4000,
  },
  {
    name: 'May',
    'Active User': 3000,
  },
  {
    name: 'Jun',
    'Active User': 1000,
  },
  {
    name: 'Jul',
    'Active User': 2000,
  },
  {
    name: 'Aug',
    'Active User': 4000,
  },
  {
    name: 'Sep',
    'Active User': 1000,
  },
  {
    name: 'Oct',
    'Active User': 4000,
  },
  {
    name: 'Nov',
    'Active User': 1000,
  },
  {
    name: 'Dec',
    'Active User': 4000,
  },
]
export const productData = [
  {
    name: 'Jan',
    Sales: 4000,
  },
  {
    name: 'Feb',
    Sales: 2000,
  },
  {
    name: 'Mar',
    Sales: 1000,
  },
  {
    name: 'Apr',
    Sales: 4000,
  },
  {
    name: 'May',
    Sales: 3000,
  },
  {
    name: 'Jun',
    Sales: 1000,
  },
  {
    name: 'Jul',
    Sales: 2000,
  },
  {
    name: 'Aug',
    Sales: 4000,
  },
  {
    name: 'Sep',
    Sales: 1000,
  },
]
export const userRows = [
  {
    id: 1,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 2,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 3,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 4,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 5,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 6,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 7,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 8,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 9,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
  {
    id: 10,
    username: 'Jon Snow',
    avatar:
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'jon@gmail.com',
    status: 'active',
    transaction: '$120.00',
  },
]
export const productRows = [
  {
    id: 1,
    name: 'Apple AirPods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: '123',
    status: 'active',
    price: '$120.00',
  },
  {
    id: 2,
    name: 'Apple AirPods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: '123',
    status: 'active',
    price: '$120.00',
  },
  {
    id: 3,
    name: 'Apple AirPods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: '123',
    status: 'active',
    price: '$120.00',
  },
  {
    id: 4,
    name: 'Apple AirPods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: '123',
    status: 'active',
    price: '$120.00',
  },
  {
    id: 5,
    name: 'Apple AirPods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: '123',
    status: 'active',
    price: '$120.00',
  },
  {
    id: 6,
    name: 'Apple AirPods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: '123',
    status: 'active',
    price: '$120.00',
  },
  {
    id: 7,
    name: 'Apple AirPods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: '123',
    status: 'active',
    price: '$120.00',
  },
  {
    id: 8,
    name: 'Apple AirPods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: '123',
    status: 'active',
    price: '$120.00',
  },
  {
    id: 9,
    name: 'Apple AirPods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: '123',
    status: 'active',
    price: '$120.00',
  },
  {
    id: 10,
    name: 'Apple AirPods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: '123',
    status: 'active',
    price: '$120.00',
  },
]
