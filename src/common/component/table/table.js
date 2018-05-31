import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd'

class MyTable extends React.PureComponent {
  render() {
    const {
      columns,total, result, loading,
    } = this.props
    let pagination = {
      showQuickJumper: true,
      total: total,
      pageSize: 8,
      showTotal: (total) => {
        return `共${total}条`
      },
      itemRender: (current, type, originalElement) => {
        if (type === 'prev') {
          return <a>上一页</a>;
        } else if (type === 'next') {
          return <a>下一页</a>;
        }
        return originalElement;
      }
    }
    return (<div>
      <Table
        dataSource={result}
        loding={loading}
        size="middle"
        columns={columns}
        pagination={pagination}
        rowKey={(r, i) => (i)}
      />
    </div>);
  }
}

MyTable.propTypes = {
  total: PropTypes.number.isRequired,
  result: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MyTable;
