## &lt;ngx-user-avatar&gt;
[![npm version](https://badge.fury.io/js/ngx-user-avatar.svg)](https://badge.fury.io/js/ngx-user-avatar.svg) 
[![npm](https://img.shields.io/npm/d18m/ngx-user-avatar.svg)](https://www.npmjs.com/package/ngx-user-avatar) 
![size](https://img.shields.io/bundlephobia/minzip/ngx-user-avatar.svg)

## Install
```shell
npm install ngx-user-avatar
```
## Usage


### Component
```typescript
import { NgxUserAvatarComponent } from 'ngx-user-avatar'

@Component({
  ...
  imports: [ NgxUserAvatarComponent ],
  ...
})
```
### Template html
```html
<ngx-user-avatar fullname="John Doe" (click)="onClick()" />
```
## Props

| Prop            	| Type   	| Default 	| Required 	|
|-----------------	|--------	|---------	|----------	|
| fullname        	| string 	|         	| yes      	|
| color           	| string 	| gray    	| no       	|
| backgroundColor 	| string 	| #f0f0f0 	| no       	|
| size            	| number 	| 50      	| no       	|
| click           	| event  	|         	| no       	|
