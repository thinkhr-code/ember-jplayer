# ember-jplayer

An Ember component for [jPlayer](https://github.com/jejacks0n/jPlayer).

## Installation

* `ember install ember-jplayer`

## Component

```
= jplayer-component url='http://my.audio/file.mp3'
```

### Customizing the template

To change the jplayer skin, simply add a template at `app/templates/components/jplayer-component`.  See the [jPlayer documentation](http://jplayer.org/latest/developer-guide/) for details.

See the [example SASS]() file for an example of setting up CSS for this.

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Dependencies

- This makes use of [Ember Tooltips](https://github.com/sir-dunxalot/ember-tooltips)
- To disable, add this in `app/components/jplayer-component.js`:

```
import Jplayer from 'ember-jplayer/components/jplayer-component';

export defualt Jplayer.extend({
  enableTooltips: false
});
```

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
