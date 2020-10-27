# Micro Frontend Base

## Description

This Micro Frontend .....

_** TO BE COMPLETED **_

<br />

## Props

| Name             | Description                                                  | Required | Default |
| ---------------- | ------------------------------------------------------------ | -------- | ------- |
| locale           | This is the lang used by the component                       | Not      | en      |
| localChannel     | Channel / Topic specific for communication parent <-> child  | Not      |         |
| appChannel       | Channel / Topic specific for communication app <-> children  | Not      | microfrontends       |

<br />


## Events

### Input events

| Type         | Description                                                  | Payload |
| ------------ | ------------------------------------------------------------ | ------- |
| changeLocale | This event is listened and when it's received, the lang of the component is changed | {<br />&nbsp; &nbsp; "cmd": "changeLocale",<br /> &nbsp; &nbsp; "payload": { <br /> &nbsp; &nbsp; &nbsp; &nbsp;  "locale": "en"<br />&nbsp; &nbsp; }<br />}      |



### Output events

| Type         | Description                                    | Payload           |
| ------------ | ---------------------------------------------- | ----------------- |
| ComponentInitialized | This event is fired when the component is ready | {component: microfrontend-base} |

<br />

## How can I use it?

### Load

This micro frontend is located in the URI '** .... **' (To be completed)

### Usage

This micro frontend is associated to this tag:

```jsx
<microfrontend-base 
    locale="en" 
    localChannel="microfrontend-base">
</microfrontend-base>
```
