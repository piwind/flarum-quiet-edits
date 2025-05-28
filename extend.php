<?php

/**
 * Quiet Edits Extension for Flarum.
 *
 * LICENSE: For the full copyright and license information,
 * please view the LICENSE.md file that was distributed
 * with this source code.
 */

namespace Piwind\QuietEdits;

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;
use Piwind\QuietEdits\Listeners\PostActions;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    (new Extend\Locales(__DIR__ . '/locale')),

    (new Extend\Event())
        ->subscribe(Listeners\PostActions::class),
];
