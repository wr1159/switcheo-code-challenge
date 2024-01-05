# tasks

**tasks** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

The resource that can be CRUD in this chain is task.
It contains the following:

- Title (string)
- Description (string)
- Completed (bool)

The chain currently support the below functions:

- `create-task(string title, string description, bool completed)`
- `update-task(uint id, string title, string description, bool completed)` - Update task details
- `delete-task(uint id)` - Delete task
- `task(uint id)` - Get details of task
- `task-all(string filter)` - List resources with filter, use "" for no filter

The queries are usable on the OpenAPI as well which is hosted once `ignite chain serve` is used.

## Get started

```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

## Example run through of functions

- `tasksd tx tasks create-task Title Description true --from alice --chain-id tasks` - creates a new task with title of "Title", description of "Description" and completed state of true
- `tasksd tx tasks update-task 0 "Updated Title" "Updated Description" true --from alice --chain-id tasks` - updates id 0 task with title of "Updated Title", description of "Updated Description" and completed state of false
- `tasksd tx tasks create-task "New Title" "New Description" true --from alice --chain-id tasks` - creates a new task with title of "New Title", description of "New Description" and completed state of true.
- `tasksd q tasks show-task 0` - view id 0 task's resources
- `tasksd q tasks list-task ""` - lists all the tasks without any filter
- `tasksd q tasks list-task "title=new&completed=true"` - lists all the tasks that has a title that contains the word "new" and has a completed state of true
- `tasksd tx tasks delete-task 0 true --from alice --chain-id tasks` - deletes id 0 task

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

## Release

To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install

To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.ignite.com/username/tasks@latest! | sudo bash
```

`username/tasks` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Ignite CLI](https://ignite.com/cli)
- [Tutorials](https://docs.ignite.com/guide)
- [Ignite CLI docs](https://docs.ignite.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/ignite)
