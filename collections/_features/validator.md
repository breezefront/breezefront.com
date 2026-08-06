---
layout: docs
title: Validator
description: HTML forms validation
---

# Validator

* TOC
{:toc}

## About

Breeze provides [extendable](#custom-validation-rule) validator to validate 
form data. It's also possible to validate fields programmatically.

## Form validation

Each form is processed automatically based on `class`, `pattern`, and 
`data-validate` attributes:

```html
<form>
    <div class="field">
        <input name="field-1" class="required"/>
    </div>
    <div class="field">
        <input name="field-2" required pattern=".*\.myco\..*" title="The URL must be in a Myco domain"/>
    </div>
    <div class="field">
        <input name="field-3" data-validate='{
            required: true,
            pattern: {
                pattern: ".*\\.myco\\..*",
                message: "The URL must be in a Myco domain"
            }
        }'/>
    </div>
</form>
```

## Manual validation

Examples:

```js
// standard validation will add error messages
var isValid = $('input[name="field-3"]').valid();

// silent validation without error messages
var isValid = $('input[name="field-3"]').valid(true);
```

## Built-in validation rules

### required

```html
<input name=".." required/>
<input name=".." class="required"/>
<input name=".." data-validate='{required:true}'/>
```

### email

```html
<input name=".." required class="email"/>
<input name=".." required data-validate='{email:true}'/>
```

### equalTo

```html
<input name=".." id="password" data-validate='{required:true}'/>
<input name=".." data-validate='{equalTo:"#password"}'/>
```

### min

```html
<input name=".." required min="5"/>
<input name=".." data-validate='{required:true,min:5}'/>
```

### max

```html
<input name=".." required max="10"/>
<input name=".." data-validate='{required:true,max:10}'/>
```

### minlength

```html
<input name=".." required minlength="5"/>
<input name=".." data-validate='{required:true,minlength:5}'/>
```

### maxlength

```html
<input name=".." required maxlength="10"/>
<input name=".." data-validate='{required:true,maxlength:10}'/>
```

### pattern

```html
<input name=".." required pattern=".*\.myco\..*" title="The URL must be in a Myco domain" />
<input name=".." data-validate='{
    required: true,
    pattern: {
        pattern: ".*\\.myco\\..*",
        message: "The URL must be in a Myco domain"
    }
}'/>
```

### validate-select

```html
<select class="validate-select"></select>
<select data-validate='{"validate-select":true}'></select>
```

### validate-not-negative-number

```html
<input name=".." class="validate-not-negative-number"/>
<input name=".." data-validate='{"validate-not-negative-number":true}'/>
```

### validate-date

```html
<input name=".." data-validate='{required:true,"validate-date":{"dateFormat":"M\/dd\/y"}'/>
```

### validate-dob

```html
<input name=".." data-validate='{required:true,"validate-dob":{"dateFormat":"M\/dd\/y"}'/>
```

### validate-item-quantity

```html
<input name=".." data-validate='{
    required: true,
    "validate-item-quantity": {
        minAllowed: 3,
        maxAllowed: 9,
        qtyIncrements: 3
    }
}'/>
```

### validate-emails

```html
<input name=".." data-validate='{required:true,"validate-emails":true}'/>
```

### password-not-equal-to-user-name

```html
<input name=".." data-validate='{required:true,"password-not-equal-to-user-name":"username"}'/>
```

### validate-customer-password

```html
<input name=".." data-validate='{required:true,"validate-customer-password":true}'/>
```

## Custom validation rule

### Rule API

Validation rule --- is a array of two elements registered in `$.validator.validators` 
object: 

```js
$.validator.validators['validation-rule'] = [fn, message];
```

 -  The first one --- is a function that accepts value to validate, element that 
    holds this value, and validation settings. The function must return boolean value:

    ```js
    (value, el, settings) => true
    ```

 -  The second element --- is a error message to show is case of failed validation.
    This may be a string or function that accepts the same three arguments and returns
    the string:

    ```js
    $t('Validation failed')
    // OR
    (value, el, settings) => $t('Validation failed')
    ```

To apply rule for the field add the rule name to `data-validate` or `class` attribute:

```html
<!-- Rule without settings -->
<input name=".." class="validation-rule"/>
<input name=".." data-validate='{"validation-rule":true}'/>

<!-- Rule with settings -->
<input name=".." data-validate='{"validation-rule":{key:"value"}}'/>
```

### Example

Let's create url validation rule based on Magento's `validate-clean-url` rule.

Add the rule to your js file (it may be a [custom.js](custom-javascript) file):

```js
$.validator.validators['validate-clean-url'] = [
    (value) => $.validator.utils.isEmptyNoTrim(value) || /^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+.(com|org|net|dk|at|us|tv|info|uk|co.uk|biz|se)$)(:(\d+))?\/?/i.test(value) || /^(www)((\.[A-Z0-9][A-Z0-9_-]*)+.(com|org|net|dk|at|us|tv|info|uk|co.uk|biz|se)$)(:(\d+))?\/?/i.test(value),
    $t('Please enter a valid URL. For example http://www.example.com or www.example.com.')
];
```

Now you can use it in the form:

```html
<input name=".." data-validate='{required:true,"validate-clean-url":true}'/>
```
