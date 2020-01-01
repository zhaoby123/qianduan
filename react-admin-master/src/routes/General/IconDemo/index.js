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

export default class IconDemo extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        
        title: '用户昵称',
        dataIndex: 'Nicheng',
        width: '5%',
        editable: true,
      },
      {
        
        title: '用户封禁原因',
        dataIndex: 'ReasonBan',
        width: '5%',
        editable: true,
      },
      {
   
        title: '用户封禁时间',
        dataIndex: 'TimeBan',
        width: '2%',
        editable: true,
      },
      {

        title: '用户封禁周期',
        dataIndex: 'PeriodBan',
        width: '6%',
        editable: true,
      },
      {
        title: '操作',
        dataIndex: 'action',
        width: '5%',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <div>
              <Popconfirm title="确定解除?" onConfirm={() => this.handleDelete(record.key)}>
                <a href="javascript:;">解除黑名单状态</a>
              </Popconfirm>
            </div>

          ) : null,
      },
    ];

    this.state = {
      dataSource: [
        {
          key:"0",
          Nicheng:'张三',
          ReasonBan:'发布污秽言论',
          TimeBan:'2000-03-06',
          PeriodBan:'2035年',
        },
        {
          Nicheng:'李四',
          ReasonBan:'发布违规小说',
          TimeBan:'2000-04-06',
          PeriodBan:'2035年',
        },
        {
          key:"1",
          Nicheng:'王五',
          ReasonBan:'发布违规小说',
          TimeBan:'2000-04-06',
          PeriodBan:'2035年',
        },
        {
          key:"2",
          Nicheng:'张八',
          ReasonBan:'发布违规小说',
          TimeBan:'2000-04-06',
          PeriodBan:'2035年',
        },
        {
          key:"3",
          Nicheng:'张九',
          ReasonBan:'发布违规小说',
          TimeBan:'2000-04-06',
          PeriodBan:'2035年',
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
        <CustomBreadcrumb arr={['用户管理', '黑名单用户']} />
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
