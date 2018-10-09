/**
 * Created by bdunn on 26/10/2016.
 */
var Validator = require('../lib/modelValidator');
var validator = new Validator();

//noinspection JSUnusedGlobalSymbols
module.exports.validatorTests = {
    allowXNullableRequiredPropertiesToBeNull: function(test) {
        var data = {
            id: 1,
            count: null
        };
        var model = {
            required: [ 'id', 'count' ],
            properties: {
                id: {
                    type: 'number',
                    description: 'The object id'
                },
                count: {
                    type: 'number',
                    description: 'A number',
                    'x-nullable': true
                }
            }
        };

        var errors = validator.validate(data, model);

        test.expect(1);
        test.ok(errors.valid);

        test.done();
    },
    allowXNullableFalseRequiredProperties: function(test) {
        var data = {
            id: 1,
            count: null
        };
        var model = {
            required: [ 'id', 'count' ],
            properties: {
                id: {
                    type: 'number',
                    description: 'The object id'
                },
                count: {
                    type: 'number',
                    description: 'A number',
                    'x-nullable': false
                }
            }
        };

        var errors = validator.validate(data, model);

        test.expect(1);
        test.ok(!errors.valid);

        test.done();
    },
    allowNullablePropertiesToBeNull: function(test) {
        var data = {
            id: 1,
            count: null
        };
        var model = {
            properties: {
                id: {
                    type: 'number',
                    description: 'The object id'
                },
                count: {
                    type: 'number',
                    description: 'A number',
                    nullable: true
                }
            }
        };

        var errors = validator.validate(data, model);

        test.expect(1);
        test.ok(errors.valid);

        test.done();
    },
    allowNullableFalseProperties: function(test) {
        var data = {
            id: 1,
            count: null
        };
        var model = {
            properties: {
                id: {
                    type: 'number',
                    description: 'The object id'
                },
                count: {
                    type: 'number',
                    description: 'A number',
                    nullable: false
                }
            }
        };

        var errors = validator.validate(data, model);

        test.expect(1);
        test.ok(!errors.valid);

        test.done();
    },
    allowNullableRequiredPropertiesToBeNull: function(test) {
        var data = {
            id: 1,
            count: null
        };
        var model = {
            required: [ 'id', 'count' ],
            properties: {
                id: {
                    type: 'number',
                    description: 'The object id'
                },
                count: {
                    type: 'number',
                    description: 'A number',
                    nullable: true
                }
            }
        };

        var errors = validator.validate(data, model);

        test.expect(1);
        test.ok(errors.valid);

        test.done();
    },
    allowNullableFalseRequiredProperties: function(test) {
        var data = {
            id: 1,
            count: null
        };
        var model = {
            required: [ 'id', 'count' ],
            properties: {
                id: {
                    type: 'number',
                    description: 'The object id'
                },
                count: {
                    type: 'number',
                    description: 'A number',
                    nullable: false
                }
            }
        };

        var errors = validator.validate(data, model);

        test.expect(1);
        test.ok(!errors.valid);

        test.done();
    },
    doNotAllowXNullableRequiredPropertiesToBeMissing: function(test) {
        var data = {
            id: 1
        };
        var model = {
            required: [ 'id', 'count' ],
            properties: {
                id: {
                    type: 'number',
                    description: 'The object id'
                },
                count: {
                    type: 'number',
                    description: 'A number',
                    'x-nullable': true
                }
            }
        };

        var errors = validator.validate(data, model);

        test.expect(1);
        test.ok(!errors.valid);

        test.done();
    },
    doNotAllowXNullableRequiredPropertiesToBeBlank: function(test) {
        var data = {
            id: 1,
            count: ''
        };
        var model = {
            required: [ 'id', 'count' ],
            properties: {
                id: {
                    type: 'number',
                    description: 'The object id'
                },
                count: {
                    type: 'number',
                    description: 'A number',
                    'x-nullable': true
                }
            }
        };

        var errors = validator.validate(data, model);

        test.expect(1);
        test.ok(!errors.valid);

        test.done();
    },
    doNotAllowNullableRequiredPropertiesToBeNull: function(test) {
        var data = {
            id: 1,
            count: null
        };
        var model = {
            required: [ 'id', 'count' ],
            properties: {
                id: {
                    type: 'number',
                    description: 'The object id'
                },
                count: {
                    type: 'number',
                    description: 'A number',
                    'x-nullable': false
                }
            }
        };

        var errors = validator.validate(data, model);

        test.expect(1);
        test.ok(!errors.valid);

        test.done();
    },
    doNotAllowNullableRequiredPropertiesToBeNull2: function(test) {
        var data = {
            id: 1,
            count: null
        };
        var model = {
            required: [ 'id', 'count' ],
            properties: {
                id: {
                    type: 'number',
                    description: 'The object id'
                },
                count: {
                    type: 'number',
                    description: 'A number'
                }
            }
        };

        var errors = validator.validate(data, model);

        test.expect(1);
        test.ok(!errors.valid);

        test.done();
    },
    Issue81DefinitionTest: function(test) {
        var data = {
            name: 'zzz',
            some: undefined
        };

        var model = {
            "type": "object",
            "required": [
                "name"
            ],
            "properties": {
                "name": {
                    "type": "string"
                },
                "some": {
                    "$ref": "#/definitions/Something"
                }
            }
        };

        var errors = validator.validate(data, model);

        test.expect(1);
        test.ok(errors.valid);
        test.done();
    }
};