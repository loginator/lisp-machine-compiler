var MAX_CHILDREN = 3;

var TAG = {
    NIL: {
        text: 'NIL',
        code: 0
    },
    ATOM: {
        test: 'ATOM',
        code: 2
    },
    PTR: {
        test: 'POINTER',
        code: 1
    }
};



module.exports = {
    MAX_CHILDREN: MAX_CHILDREN,
    TAG: TAG
};
