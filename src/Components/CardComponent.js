import { Card,Row, Col,Modal, Form, Input } from 'antd';
import { EditOutlined, DeleteFilled, HeartOutlined,HeartFilled,MailOutlined ,PhoneOutlined, GlobalOutlined} from '@ant-design/icons';
import { useState } from 'react';

const { Meta } = Card;

function CardComponent(props){
    const [isLike, setlike] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

        const onFinish = (values: any) => {
          console.log('Success:', values);
        };
      
        const onFinishFailed = (errorInfo: any) => {
          console.log('Failed:', errorInfo);
        };
    return(
        <div>
            
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input  defaultValue={props.name} />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input defaultValue={props.email} />
                </Form.Item>

                <Form.Item
                    label="Phone:"
                    name="phone"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input defaultValue={props.phone} />
                </Form.Item>

                <Form.Item
                    label="Website:"
                    name="website"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input defaultValue={props.website} />
                </Form.Item>

                </Form>
            </Modal>

{            //---------------------------------------------------------------------------------------------------------------------------}
 }
           <Card
                cover={
                <img
                    alt="example"
                    src={`${props.image}`}
                    style={{height:210,backgroundColor:'#f5f5f5'}}
                />
                
                }
                actions={[
                (isLike)?<HeartOutlined  key="like" style={{color:'#EE4B2B'}} onClick={()=>setlike(!isLike)}/>
                :<HeartFilled key="like" style={{color:'#EE4B2B'}} onClick={()=>setlike(!isLike)}/>,
                <EditOutlined key="edit" onClick={()=>showModal()} />,
                <DeleteFilled  key="delete" />,
                ]}
            >

                <Row gutter={[8, 4]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}><Meta title={`${props.name}`}/></Col>    
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}><MailOutlined  />&emsp;{`${props.email}`}</Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}><PhoneOutlined   />&emsp;{`${props.phone}`}</Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}><GlobalOutlined  />&emsp;{`${props.website}`}</Col>
                </Row>               
            </Card>
        </div>
    );
}

export default CardComponent;