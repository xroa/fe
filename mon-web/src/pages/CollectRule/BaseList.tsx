import React from 'react';
import {
  Form, Input, Icon, Col, Row,
} from 'antd';
import { useDynamicList } from '@umijs/hooks';
import { Field } from './Types';

interface IParams {
  nType: string;
  hasLabel?: boolean;
  data: Field;
  getFieldDecorator: any;
  initialValues: any;
}

export default (props: IParams) => {
  const {
    list, remove, getKey, push,
  } = useDynamicList(
    (props.nType === 'modify' ? props.initialValues : props.data.default) || [''],
  );
  const {
    name, example, required,
  } = props.data;
  const Rows = (index: number, item: any) => (
    <Row key={`${name}[${getKey(index)}]`}>
      <Col span={21}>
        <Form.Item>
          {props.getFieldDecorator(`${name}[${getKey(index)}]`, {
            initialValue: item,
            rules: [
              {
                required,
                message: '必填项！',
              },
            ],
          })(
            <Input placeholder={example} />,
          )}
        </Form.Item>
      </Col>
      <Col span={3}>
        {list.length > 1 && (
          <Icon
            type="minus-circle-o"
            style={{ marginLeft: 8 }}
            onClick={() => {
              remove(index);
            }}
          />
        )}
        <Icon
          type="plus-circle-o"
          style={{ marginLeft: 8 }}
          onClick={() => {
            push('');
          }}
        />
      </Col>
    </Row>
  );
  return <div style={{ marginTop: 10 }}>{list.map((ele: any, index: any) => Rows(index, ele))}</div>;
};
