import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Root from '../../../src/app/Root';
import { findRoute } from '../../../src/app/routes';

describe('Homepage Route', function () {

  before(() => {
    this.wrapper = mount(<Root location={ '/' } />);
  });

  describe(`should contain  markup`, () => {
    it(`should contain the Homepage container`, () => {
      expect(this.wrapper.find('#homepage')).to.be.present();
    });

    it(`should contain the 'main' layout`, () => {
      expect(this.wrapper.find('.layout.layout--main')).to.be.present();
      expect(this.wrapper.find('.layout__nav')).to.be.present();
      expect(this.wrapper.find('.layout__content')).to.be.present();
      expect(this.wrapper.find('.layout__footer')).to.be.present();
    });

    it('Should contain a title', () => {
      expect(document.title).to.equal(findRoute('homepage').meta.title);
    });

    it('should have a nav', () => {
      expect(this.wrapper.find('nav')).to.be.present();
    });

    it('should have a footer', () => {
      expect(this.wrapper.find('footer')).to.be.present();
    });

  });
});
