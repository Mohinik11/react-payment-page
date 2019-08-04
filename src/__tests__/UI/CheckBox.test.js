import React from "react"
import CheckBox from "../../UI/CheckBox"
import {shallow, configure} from "enzyme"
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

let wrapper

describe("List Component", () => {
  beforeAll(() => {
    wrapper = shallow(<CheckBox />);
  });
  
  it("Should have default props", () => {
    expect(wrapper.props().type).toBeDefined();
    expect(wrapper.props().label).toBeDefined();
    expect(wrapper.props().name).toBeDefined();
    expect(wrapper.props().onClick).toBeDefined();
    expect(wrapper.props().required).toBeDefined();
    expect(wrapper.props().title).toBeDefined();
  });
  
  it("Should set passed props", () => {
    wrapper.setProps({
      type: "text",
      required: false,
      label: "Test"
    })
    expect(wrapper.props().type).toEqual("text");
    expect(wrapper.props().required).toBeFalsy();
    expect(wrapper.props().label).toEqual("Test");
  });
  
  it("Should call onClick method when checkbox is clicked", () => {
    const onClick = jest.fn();
    wrapper.setProps({onClick: onClick});
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });

});
