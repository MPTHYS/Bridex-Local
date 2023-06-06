import React from 'react'

const REGEXP = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    phone: /^[0-9\-\+]{9,15}$/,
    website:/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
  };

const Err_MESSAGE = {
    required: "please fill in this field",
    regexp: "field not like format ",
  };
export const Validate = (rules, forms)=> {
    let ErrObj = {}
    for(let key in rules) {
        for(let rule of rules[key]) {
            if(rule.required){
                if(!forms[key]) {
                    ErrObj[key] = rule.message || Err_MESSAGE.required
                }
            }
            if(rule.regexp && forms[key]) {
                let regexp = {}
                if(rule.regexp in REGEXP) {
                    regexp = REGEXP[rule.regexp]
                }
                if(!regexp.test(forms[key])) {
                    ErrObj[key] = rule.messegeRegexp || Err_MESSAGE.regexp
                }
            }
        }
    }
    return ErrObj
}

