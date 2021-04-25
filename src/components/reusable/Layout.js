import Base from './Base';

const Layout = (props) => <Base as="section" defaultCls="rac-layout" {...props} />;
const CenterLayout = (props) => <Layout className="rac-layout-center" {...props} />;
const Header = (props) => <Base as="header" defaultCls="rac-layout-header" {...props}/>;
const Footer = (props) => <Base as="footer" defaultCls="rac-layout-footer" {...props} />;
const Sider = (props) => <Base as="aside" defaultCls="rac-layout-sider" {...props} />;
const Content = (props) => <Base as="main" defaultCls="rac-layout-content" {...props} />;

Layout.CenterLayout = CenterLayout;
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Sider = Sider;
Layout.Content = Content;

export default Layout;