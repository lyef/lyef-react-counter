import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import Counter from '../../src/Counter';
import assertEqualJSX from 'assert-equal-jsx';

describe('Component Counter', () => {

    it('should have props start and end', () => {
        const wrapper = shallow(<Counter start={0} end={10} />);
        expect(wrapper.props().start).to.be.defined;
        expect(wrapper.props().end).to.be.defined;
    });

    it('should call doneCallback when finishing counting', () => {
        const doneCallback = sinon.spy();
        const wrapper = mount(<Counter start={0} end={5} done={doneCallback} />);

        expect(doneCallback).to.have.been.called;
    });

    it('should create a correct DOM structure', () => {
        const doneCallback = () => 'does something';
        const componentMock = (
            <span>0</span>
        );
        assertEqualJSX(<Counter start={0} end={0} done={doneCallback} />, componentMock);
    });
});
