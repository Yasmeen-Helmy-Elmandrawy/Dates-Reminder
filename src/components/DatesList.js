import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesList = ({ person }) => {
  return (
    <Row className="justify-content-center">
        <Col sm={8} className="">
            <div className="rectangle p-2">
                {person.length ? (person.map((item) => {
                    return (
                        <div key={item.id} className="d-flex border-bottom mx-3 mb-2">
                            <img src={item.img} className="img-avatar" alt="person1" />
                            <div className="px-3">
                                <p className="d-inline fs-5">{item.name}</p>
                                <p className="fs-6">{item.date}</p>
                            </div>
                        </div>
                    )
                })) : <h2 className="p-5 text-center">لا يوجد مواعيد اليوم</h2>}     
            </div>
        </Col>     
    </Row>
  )
}

export default DatesList
