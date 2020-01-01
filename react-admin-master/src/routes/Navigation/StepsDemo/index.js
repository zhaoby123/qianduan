import React from 'react'
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
const { Search } = Input;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title, } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} 不能为空.`,
            },
          ],
          initialValue: record[dataIndex],
        })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
      </Form.Item>
    ) : (
        <div
          className="editable-cell-value-wrap"
          style={{ paddingRight: 24 }}
          onClick={this.toggleEdit}
        >
          {children}
        </div>
      );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
            children
          )}
      </td>
    );
  }
}

export default class StepDemo extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '书名',
        dataIndex: 'BookName',
        width: '5%',
        editable: true,
      },
      {
        title: '作者',
        dataIndex: 'author',
        width: '2%',
        editable: true,
      },
      {
        title: '类别',
        dataIndex: 'bookType',
        width: '2%',
        editable: true,
      },
      {
        title: '热书封面',
        dataIndex: 'BookImg',
        width: '6%',
        editable: true,
      },
      {
        title: '未上架原因',
        dataIndex: 'downReason',
        width: '5%',
        editable: true,
      },
      {
        title: '下架时间',
        dataIndex: 'downTime',
        width: '5%',
        editable: true,
      },
      {
        title: '操作',
        dataIndex: 'action',
        width: '5%',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <div>
              <Popconfirm title="确定上架?" onConfirm={() => this.handleDelete(record.key)}>
                <a href="javascript:;">上架此书</a>
              </Popconfirm>
            </div>

          ) : null,
      },
    ];

    this.state = {
      dataSource: [
        {
          key:"0",
          BookName:'斗破苍穹',
          author:"张三",
          bookType:"玄幻",
          BookState:'连载中',
          BookImg:'./dpcq.jpg',
          downReason:"章节又反动内容",
          downTime:"2000-03-04",
        },
        {
          key:"1",
          BookName:'斗破苍穹',
          author:"张三",
          bookType:"玄幻",
          BookState:'连载中',
          BookImg:'./dpcq.jpg',
          downReason:"封面不合规范",
          downTime:"2000-03-04",
        },{
          key:"2",
          BookName:'斗破苍穹',
          author:"张三",
          bookType:"玄幻",
          BookState:'连载中',
          BookImg:'./dpcq.jpg',
          downReason:"书名不合规范",
          downTime:"2000-03-04",
        },{
          key:"3",
          BookName:'斗破苍穹',
          author:"张三",
          bookType:"玄幻",
          BookState:'连载中',
          BookImg:'./dpcq.jpg',
          downReason:"章节又反动内容",
          downTime:"2000-03-04",
        },{
          key:"4",
          BookName:'斗破苍穹',
          author:"张三",
          bookType:"玄幻",
          BookState:'连载中',
          BookImg:'./dpcq.jpg',
          downReason:"书名不合规范",
          downTime:"2000-03-04",
        },
      ],
    };
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };


  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  };


  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });

    return (
      <div>
        <CustomBreadcrumb arr={['图书管理', '未上架书籍']} />
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns} />

      </div>
    )
  }
}
