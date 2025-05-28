# Quiet Edits for Flarum

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/piwind/flarum-quiet-edits/blob/master/LICENSE) [![Latest Stable Version](https://img.shields.io/packagist/v/piwind/flarum-quiet-edits.svg)](https://packagist.org/packages/piwind/flarum-quiet-edits) [![Total Downloads](https://img.shields.io/packagist/dt/piwind/flarum-quiet-edits.svg)](https://packagist.org/packages/piwind/flarum-quiet-edits)

这个插件是为了扩展 [piwind/flarum-diff](https://github.com/piwind/flarum-diff) 的功能，使得在一定条件下（短间隔时间、仅大小写、仅空格差异）的编辑帖子动作不会产生编辑记录。

## About This Fork

就改了个名字，暂时别用。

## Features

Edits made within the grace period immediately after posting will not be considered as formal edits. You can also ignore whitespace and case differences independently from the grace period.

- And again, it's based on @jfcherng's [diff](https://github.com/jfcherng/php-diff) repository.
- It raises new events for developers, called `PostWasRevisedQuietly` & `PostWasRevisedLoudly`

![Settings](https://i.imgur.com/MZNqmCR.png)

## Requirements

![php](https://img.shields.io/badge/php-%5E7.1.3-blue?style=flat-square) ![ext-iconv](https://img.shields.io/badge/ext-iconv-brightgreen?style=flat-square)

You can check your php version by running `php -v` and check if `iconv` is installed by running `php --ri iconv` (which should display `iconv support => enabled`).

## Installation & Updating

Install with composer:

```bash
composer require piwind/flarum-quiet-edits
```

Updating:

```bash
composer update piwind/flarum-quiet-edits
php flarum cache:clear
```

## Usage

Enable the extension. The grace period is 120 seconds, whitespace and case differences will be ignored by default.

## Links

- [Source code on GitHub](https://github.com/piwind/flarum-quiet-edits)
- [Report an issue](https://github.com/piwind/flarum-quiet-edits/issues)
- [Download via Packagist](https://packagist.org/packages/piwind/flarum-quiet-edits)

