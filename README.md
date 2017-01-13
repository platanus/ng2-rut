Angular 2 RUT
=============

Angular 2 library with several components to handle Chilean RUT validation, cleaning and formatting.

## Installation

TODO

## Usage

### Set-up:

The easier way is to import the Ng2Rut module at your app-level module ending with something like this:

```typescript
import { NgModule } from '@angular/core';
import { Ng2Rut } from '../../src';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    DemoAppComponent,
  ],
  imports: [
    BrowserModule,
		...,
    Ng2Rut
  ],
  bootstrap: [DemoAppComponent],
})
class DemoAppModule { }
```

See `./demo` folder for a fully working example.

### Using it:

ng2 rut exposes various elements that can be used to perform input validation and formatting. Probably you want to use one of the following:

- `RutValidator`: Exposes the `validateRut` directive (to attach to models or inputs) and the RutValidator class to be used as `Validator` on reactive forms.
- `RutPipe`: Exposes the `RutPipe` pipe to format rut numbers on templates
- `RutDirective`: Exposes the `formatRut` directive to format RUT inputs.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Credits

Thank you [contributors](https://github.com/platanus/ng2-rut/graphs/contributors)!

<img src="http://platan.us/gravatar_with_text.png" alt="Platanus" width="250"/>

ng2-rut is maintained by [platanus](http://platan.us).

## License

Angular 2 RUT is © 2016 Platanus, spa. It is free software and may be redistributed under the terms specified in the LICENSE file.
