var expect = require('chai').expect;

function titleCase(title) {
  var words = title.split(' ');
  var titleCaseWords = words.map(w => w[0].toUpperCase() + w.substring(1));
  return titleCaseWords.join(' ');
};

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.be.equal('A');
expect(titleCase('charles')).to.be.equal('Charles');

expect(titleCase('the great mouse detective')).to.be.equal('The Great Mouse Detective');