var RBProgress = rubix_bootstrap.core.reactified_progress;
var RBProgressGroup = rubix_bootstrap.core.reactified_progress_group;

class Progress extends React.Component {
  get value() {
    return this.props.value;
  }
  get min() {
    return this.props.min;
  }
  get max() {
    return this.props.max;
  }
  getValue() {
    console.warn("Progress.getValue() is deprecated. Please refer to \"Progress \" documentation.");
    return this.value;
  }
  getMin() {
    console.warn("Progress.getMin() is deprecated. Please refer to \"Progress \" documentation.");
    return this.min;
  }
  getMax() {
    console.warn("Progress.getMax() is deprecated. Please refer to \"Progress \" documentation.");
    return this.max;
  }
  render() {
    return <RBProgress {...this.props} />;
  }
}

module.exports = {
  Progress: Progress,
  ProgressGroup: RBProgressGroup
};
