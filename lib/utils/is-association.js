import _isPlainObject from 'lodash/isPlainObject';

export default function(object) {
  return _isPlainObject(object) && object.__isAssociation__ === true;
}
