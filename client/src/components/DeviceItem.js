import { Card, Col } from "react-bootstrap";
import React from 'react';
import star from '../assets/star.png'
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";


const DeviceItem = ({device}) => {
    const history = useNavigate()
    return (
        <Col md={3} className="mt-4 d-flex" onClick={()=> history(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor:"pointer"}} border={"light"}>
                <Image width={150} heigh={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 d-flex justify-content-between align-items-center">
                    <div> Samsung ...</div>
                    <div className="mt-1 d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={20} heigh={18} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;