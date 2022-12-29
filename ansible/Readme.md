# Ansible Playbooks

## Introduction

This repository contains a collection of playbooks to run repetitive tasks on Windows and Linux hosts

## Prerequisites to run the Ansible playbooks of this repository

1. Access to a Linux system that can be used as Ansible "master" node
2. Create the folder /opt/ansible
3. Copy from this repository the Ansible playbooks you need to run
4. To run playbooks on Linux nodes, configure SSH keys: https://www.bogotobogo.com/DevOps/Ansible/Ansible-SSH-Connection-Setup-Run-Command.php
5. To run playbooks on Windows nodes, configure winrm https://www.middlewareinventory.com/blog/how-to-use-ansible-with-windows-host-ansible-windows-example/

## OS updates playbooks

The available Ansible playbooks for OS updates are:

* playbooks/os_updates/linux_updates.yml: it will execute OS updates on Ubuntu/CentOS hosts in inventory file located in inventory/os_updates
* playbooks/os_updates/windows_updates.yml: it will execute OS updates on Windows hosts in inventory file located in inventory/os_updates

To run OS updates on Linux nodes run this command:

```
ansible-playbook playbooks/os_updates/linux_updates.yml -i inventory/os_updates -K
```

When asked specify the password of sudo user to run updates on all systems.

To run OS updates on Windows hosts run this command:

```
ansible-playbook playbooks/os_updates/windows_updates.yml -i inventory/os_updates -k
```

When asked specify the password of local Windows Administrator user.
