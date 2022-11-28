import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import "./breadcumb.scss";

const BreadCrumb = () => {
  const location = useLocation();
  const pages = {
    profile: "Thông tin cá nhân",
    service: "Dịch vụ",
    listService: "Danh sách dịch vụ",
    newService: "Thêm dịch vụ",

    detail: "Chi tiết",
    updateService: "Cập nhật",
    "issuedNo.": "Cấp số",
    "listIssuedNo.": "Danh sách cấp số",
    "newIssuedNo.": "Cấp số mới",

    Report: "Báo cáo",
    Setting: "Cài đặt hệ thống",
    device: "Thiết bị",
    listDevice: "Danh sách thiết bị",
    newDevice: "Thêm thiết bị",
    updateDevice: "Cập nhật thiết bị",
  };
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames =
      pathname.split("/").length > 4
        ? pathname
            .split("/")
            .filter(
              (item) =>
                item !== pathname.split("/")[3] &&
                item !== pathname.split("/")[0]
            )
        : pathname.split("/").filter((item) => item);

    return (
      <div>
        <Breadcrumb separator=">">
          {pathnames.length > 0 ? (
            <Breadcrumb.Item className="breadcrumbsCustomStyle"></Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item className="breadcrumbsCustomStyle">
              Dashboard
            </Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item
                key={pages[name]}
                className="breadcrumbsCustomStyle"
              >
                {pages[name]}
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item className="breadcrumbsCustomStyle">
                <Link to={`${routeTo}`}>{pages[name]}</Link>
              </Breadcrumb.Item>
            );
          })}
          {pathnames[pathnames.length - 1]?.indexOf("KIO") === 0 ? (
            <Breadcrumb.Item className="breadcrumbsCustomStyle">
              Chi tiết
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item className="breadcrumbsCustomStyle"></Breadcrumb.Item>
          )}
        </Breadcrumb>
      </div>
    );
  };

  return <>{breadCrumbView()}</>;
};

export default BreadCrumb;
