import React, { useEffect, useState } from "react";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import HeaderClient from "../components/HeaderClient";
import { IoAppsSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { SiPremierleague } from "react-icons/si";

const { Sider, Content } = Layout;

const LayoutAdmin = ({ children }) => {
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { borderRadiusLG },
    } = theme.useToken();

    const [menuItems, setMenuItems] = useState([]);
    const [activeMenu, setActiveMenu] = useState("/");

    useEffect(() => {
        const full = [
            {
                label: <Link to="/">Dashboard</Link>,
                key: "/",
                icon: <IoAppsSharp />,
            },
            {
                label: <Link to="/user">User</Link>,
                key: "/user",
                icon: <UserOutlined />,
            },
        ];
        setMenuItems(full);
    }, []);

    useEffect(() => {
        setActiveMenu(location.pathname);
    }, [location]);

    return (
        <Layout>
            <Sider
                className="bg-[#7A40F2]"
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <div className="demo-logo-vertical" />
                <div className="flex justify-center my-[40px]">
                    <Link to={"/"}>
                        <SiPremierleague className="text-[35px] text-white" />
                    </Link>
                </div>
                <Menu
                    className="bg-[#7A40F2]"
                    // theme="dark"
                    mode="inline"
                    selectedKeys={[activeMenu]}
                    items={menuItems}
                />
            </Sider>
            <Layout className="min-h-screen">
                <HeaderClient
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                />
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        // background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutAdmin;
