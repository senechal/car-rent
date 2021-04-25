import Base from './Base';

export const Layout = (props) => <Base as="section" defaultCls="rac-layout" {...props} />;
export const CenterLayout = (props) => <Layout className="rac-layout-center" {...props} />;
export const Header = (props) => <Base as="header" defaultCls="rac-layout-header" {...props}/>;
export const Footer = (props) => <Base as="footer" defaultCls="rac-layout-footer" {...props} />;
export const Sider = (props) => <Base as="aside" defaultCls="rac-layout-sider" {...props} />;
export const Content = (props) => <Base as="main" defaultCls="rac-layout-content" {...props} />;

Layout.CenterLayout = CenterLayout;
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Sider = Sider;
Layout.Content = Content;

export default Layout;
