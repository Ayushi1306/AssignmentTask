const GroupedBarChart = (props) =>{
  var plot1 = {
  x: ["1", "2", "3", "4", "5"],
  y: [Test1, Test2, Test3, Test4, Test5],
  name: "99",
  type: "bar",
};

var plot2 = {
  x: ["1", "2", "3", "4", "5"],
  y: [Test1, Test2, Test3, Test4, Test5],
  name: "98",
  type: "bar",
};

var data = [plot1, plot2];
    return(
      <Plot
      data={data}
      layout={ {width: 500, height: 500, title: 'Bar Chart'} } />
    )
}
