import en from '../packages/locales/en';
export default {
  ...en,
  'menu.job.tasks-add': 'Create Task',
  'menu.job.tasks': 'Tasks',
  'menu.job.tpls': 'Task Template',
  'menu.job.deploy': 'Deploy',
  'menu.job.shortcuts': 'Shortcuts',
  'menu.job.shortcuts.rdb': 'RDB',
  'menu.job.shortcuts.ams': 'AMS',
  'menu.job.shortcuts.mon': 'MON',

  'breadcrumb.groups': 'Groups',
  'breadcrumb.tpls': 'Templates',
  'breadcrumb.tpl': 'Detail',

  'groups.linked': 'Linked',
  'groups.public': 'Public',
  'groups.name': 'Name',
  'groups.pub': 'Visibility',
  'groups.pub.0': 'private',
  'groups.pub.1': 'public',
  'groups.rw.team': 'ReadWrite Team',
  'groups.ro.team': 'ReadOnly Team',

  'tpl.create': 'Create',
  'tpl.tag.bind': 'Bind tags',
  'tpl.tag.unbind': 'Unbind tags',
  'tpl.tag.bind.title': 'Batch bind tags',
  'tpl.tag.bind.success': 'Successfully binded',
  'tpl.tag.bind.field': 'tags',
  'tpl.tag.unbind.title': 'Batch unbind tags',
  'tpl.tag.unbind.field': 'tags',
  'tpl.tag.unbind.success': 'Successfully unbinded',
  'tpl.node.modify': 'Modify node',
  'tpl.node.modify.title': "Batch modify node",
  'tpl.batch.modify.group': 'Batch modify group',
  'tpl.title': 'Title',
  'tpl.title.tpl.help': 'Describe the role of the template',
  'tpl.title.task.help': 'Describe the role of the task',
  'tpl.tags': 'Tags',
  'tpl.tags.help': 'Used for classification',
  'tpl.creator': 'Creator',
  'tpl.last_updator': 'Last updator',
  'tpl.last_updated': 'Last updated',
  'tpl.account.help': 'Execute account, use root with caution',
  'tpl.batch.help': 'Concurrency, default is 0, indicating full concurrent execution, 1 means sequential execution, 2 means that each time two execute',
  'tpl.tolerance.help': 'Tolerate several machines failing, the default is 0, which means no tolerance, once failed, immediately suspend',
  'tpl.timeout.help': 'Timeout for stand-alone script execution, in seconds',
  'tpl.pause.help': 'Pause after completed, pause multiple hosts, write multiple hosts {habitsId}, separated by commas',
  'tpl.host.help': 'List of hosts to be executed',
  'tpl.script.help': 'Script content to be executed',
  'tpl.args.help': 'Parameters attached to the script, separated by double commas, such as arg1,,arg2,,arg3',
  'tpl.modify': 'Modify the template',
  'tpl.create.task': 'Create a new task',

  'task.create': 'Create task',
  'task.title': 'Title',
  'task.done': 'Done',
  'task.clone': 'Clone',
  'task.meta': 'Meta',
  'task.creator': 'Creator',
  'task.created': 'Created',
  'task.only.mine': 'Just mine',
  'task.host': 'Host',
  'task.status': 'Status',
  'task.output': 'Output',
  'task.refresh': 'Refresh',
  'task.control.params': 'Control params',
  'task.account': 'Account',
  'task.batch': 'Batch',
  'task.tolerance': 'Tolerance',
  'task.timeout': 'Timeout',
  'task.script': 'Script',
  'task.script.args': 'Script params',
  'task.pause': 'Pause',
  'task.host.list': 'Host list',
  'task.clone.new': 'Clone a new task',

  'groups.instGroups': 'Instant groups',
  'groups.crontabGroups': 'Crontab groups',

  'perms.hosts': 'Hosts',
  'perms.host': 'Host',
  'perms.team': 'Team',
  'perms.account': 'Account',

  'last.7.days': 'Last 7 days',
  'last.15.days': 'Last 15 days',
  'last.30.days': 'Last 30 days',
  'last.60.days': 'Last 60 days',
  'last.90.days': 'Last 90 days',
};
