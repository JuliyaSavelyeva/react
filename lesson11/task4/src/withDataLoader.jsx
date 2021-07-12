import React from 'react';

export function withDataLoader(url, WrappedComponent) {
  return new (class DataLoader extends React.Component {
    state = {
      data: '',
    };

    componentDidMount() {
      fetch(url)
        .then(response => response.json())
        .then(data =>
          this.setState({
            data,
          }),
        );
    }

    // handleChange() {
    //   this.setState({
    //     data: selectData(DataSource, this.props),
    //   });
    // }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  })();
}
