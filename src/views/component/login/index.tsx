import React from 'react';
import { Result,Button } from 'antd';
function Error403() {
  return (
    <FormWrap className="page-login">
      <Tabs defaultActiveKey={activeTab} onChange={setActiveTab}>
        <Tabs.TabPane tab="账号密码登录" key="account"></Tabs.TabPane>
        <Tabs.TabPane tab="手机号登录" key="mobile"></Tabs.TabPane>
      </Tabs>

      <Form onFinish={onSubmit} form={form}>
        {activeTab === 'account' ? (
          <>
            <LoginItem.Account form={form} />
            <LoginItem.Password form={form} />
          </>
        ) : (
          <>
            <LoginItem.Mobile form={form} />
            <LoginItem.Code form={form} />
          </>
        )}

        <Form.Item>
          <div className="align--between">
            <Checkbox defaultChecked>自动登录</Checkbox>
            <Link to="/system/recovery-pwd">忘记密码</Link>
          </div>
        </Form.Item>

        <Form.Item>
          <Button block htmlType="submit" type="primary">
            登录
          </Button>
        </Form.Item>

        <Form.Item>
          <div className="align--between">
            <div className="page-login__others">
              其他登录方式
              <GithubOutlined className="page-login__icon"></GithubOutlined>
              <ZhihuOutlined className="page-login__icon"></ZhihuOutlined>
            </div>
            <Link to="/system/register">注册账号</Link>
          </div>
        </Form.Item>
      </Form>
    </FormWrap>
  );
}

export default Error403;
