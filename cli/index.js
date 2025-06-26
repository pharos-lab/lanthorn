#!/usr/bin/env node

import { add } from './add.js'
import { Command } from 'commander'

const program = new Command()

program
  .name('lanthorn')
  .description('Lanthorn component manager')
  .version('0.1.0')

program
  .command('add')
  .argument('<component>', 'Component name to add locally')
  .action((component) => {
    add(component)
  })

program.parse()