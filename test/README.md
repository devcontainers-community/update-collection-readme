Feature list:

<!-- prettier-ignore-start -->
<!-- START_FEATURE_LIST -->

- **[Anaconda](https://github.com/devcontainers/features/tree/main/src/anaconda)**
- **[AWS CLI](https://github.com/devcontainers/features/tree/main/src/aws-cli)** - Installs the AWS CLI along with needed dependencies. Useful for base Dockerfiles that often are missing required install dependencies like gpg.
- **[Azure CLI](https://github.com/devcontainers/features/tree/main/src/azure-cli)** - Installs the Azure CLI along with needed dependencies. Useful for base Dockerfiles that often are missing required install dependencies like gpg.
- **[Common Utilities](https://github.com/devcontainers/features/tree/main/src/common-utils)** - Installs a set of common command line utilities, Oh My Zsh!, and sets up a non-root user.
- **[Conda](https://github.com/devcontainers/features/tree/main/src/conda)** - A cross-platform, language-agnostic binary package manager
- **[Light-weight Desktop](https://github.com/devcontainers/features/tree/main/src/desktop-lite)** - Adds a lightweight Fluxbox based desktop to the container that can be accessed using a VNC viewer or the web. GUI-based commands executed from the built-in VS code terminal will open on the desktop automatically.
- **[Docker (Docker-in-Docker)](https://github.com/devcontainers/features/tree/main/src/docker-in-docker)** - Create child containers *inside* a container, independent from the host's docker instance. Installs Docker extension in the container along with needed CLIs.
- **[Docker (docker-outside-of-docker)](https://github.com/devcontainers/features/tree/main/src/docker-outside-of-docker)** - Re-use the host docker socket, adding the Docker CLI to a container. Feature invokes a script to enable using a forwarded Docker socket within a container to run Docker commands.
- **[Dotnet CLI](https://github.com/devcontainers/features/tree/main/src/dotnet)** - Installs the .NET CLI. Provides option of installing sdk or runtime, and option of versions to install. Uses latest version of .NET sdk as defaults to install.
- **[Git (from source)](https://github.com/devcontainers/features/tree/main/src/git)** - Install an up-to-date version of Git, built from source as needed. Useful for when you want the latest and greatest features. Auto-detects latest stable version and installs needed dependencies.
- **[Git Large File Support (LFS)](https://github.com/devcontainers/features/tree/main/src/git-lfs)** - Installs Git Large File Support (Git LFS) along with needed dependencies. Useful for base Dockerfiles that often are missing required install dependencies like git and curl.
- **[GitHub CLI](https://github.com/devcontainers/features/tree/main/src/github-cli)** - Installs the GitHub CLI. Auto-detects latest version and installs needed dependencies.
- **[Go](https://github.com/devcontainers/features/tree/main/src/go)** - Installs Go and common Go utilities. Auto-detects latest version and installs needed dependencies.
- **[Hugo](https://github.com/devcontainers/features/tree/main/src/hugo)**
- **[Java (via SDKMAN!)](https://github.com/devcontainers/features/tree/main/src/java)** - Installs Java, SDKMAN! (if not installed), and needed dependencies.
- **[Kubectl, Helm, and Minikube](https://github.com/devcontainers/features/tree/main/src/kubectl-helm-minikube)** - Installs latest version of kubectl, Helm, and optionally minikube. Auto-detects latest versions and installs needed dependencies.
- **[Nix Package Manager](https://github.com/devcontainers/features/tree/main/src/nix)** - Installs the Nix package manager and optionally a set of packages.
- **[Node.js (via nvm), yarn and pnpm](https://github.com/devcontainers/features/tree/main/src/node)** - Installs Node.js, nvm, yarn, pnpm, and needed dependencies.
- **[NVIDIA CUDA](https://github.com/devcontainers/features/tree/main/src/nvidia-cuda)** - Installs shared libraries for NVIDIA CUDA.
- **[Oryx](https://github.com/devcontainers/features/tree/main/src/oryx)** - Installs the oryx CLI
- **[PHP](https://github.com/devcontainers/features/tree/main/src/php)**
- **[PowerShell](https://github.com/devcontainers/features/tree/main/src/powershell)** - Installs PowerShell along with needed dependencies. Useful for base Dockerfiles that often are missing required install dependencies like gpg.
- **[Python](https://github.com/devcontainers/features/tree/main/src/python)** - Installs the provided version of Python, as well as PIPX, and other common Python utilities.  JupyterLab is conditionally installed with the python feature. Note: May require source code compilation.
- **[Ruby (via rvm)](https://github.com/devcontainers/features/tree/main/src/ruby)** - Installs Ruby, rvm, rbenv, common Ruby utilities, and needed dependencies.
- **[Rust](https://github.com/devcontainers/features/tree/main/src/rust)** - Installs Rust, common Rust utilities, and their required dependencies
- **[SSH server](https://github.com/devcontainers/features/tree/main/src/sshd)** - Adds a SSH server into a container so that you can use an external terminal, sftp, or SSHFS to interact with it.
- **[Terraform, tflint, and TFGrunt](https://github.com/devcontainers/features/tree/main/src/terraform)** - Installs the Terraform CLI and optionally TFLint and Terragrunt. Auto-detects latest version and installs needed dependencies.

<!-- END_FEATURE_LIST -->
<!-- prettier-ignore-end -->

Template list:

<!-- prettier-ignore-start -->
<!-- START_TEMPLATE_LIST -->

- **[Alpine](https://github.com/devcontainers/templates/tree/main/src/alpine)** - Simple Alpine container with Git installed.
- **[Anaconda (Python 3)](https://github.com/devcontainers/templates/tree/main/src/anaconda)** - Develop Anaconda applications in Python3. Installs dependencies from your environment.yml file and the Python extension.
- **[Anaconda (Python 3) & PostgreSQL](https://github.com/devcontainers/templates/tree/main/src/anaconda-postgres)** - Develop Anaconda & PostgreSQL applications in Python3. Installs dependencies from your environment.yml file and the Python extension.
- **[C++](https://github.com/devcontainers/templates/tree/main/src/cpp)** - Develop C++ applications on Linux. Includes Debian C++ build tools.
- **[C++ & MariaDB](https://github.com/devcontainers/templates/tree/main/src/cpp-mariadb)** - Develop C++ applications on Linux. Includes Debian C++ build tools.
- **[Debian](https://github.com/devcontainers/templates/tree/main/src/debian)** - Simple Debian container with Git installed.
- **[Existing Docker Compose (Extend)](https://github.com/devcontainers/templates/tree/main/src/docker-existing-docker-compose)** - Sample illustrating how to extend an existing Docker Compose file for use in a dev container.
- **[Existing Dockerfile](https://github.com/devcontainers/templates/tree/main/src/docker-existing-dockerfile)** - Sample illustrating reuse of an existing Dockefile.
- **[Docker in Docker](https://github.com/devcontainers/templates/tree/main/src/docker-in-docker)** - Create child containers _inside_ a container, independent from the host's docker instance. Installs Docker extension in the container along with needed CLIs.
- **[Docker outside of Docker](https://github.com/devcontainers/templates/tree/main/src/docker-outside-of-docker)** - Access your host's Docker install from inside a dev container. Installs Docker extension in the container along with needed CLIs.
- **[Docker outside of Docker Compose](https://github.com/devcontainers/templates/tree/main/src/docker-outside-of-docker-compose)** - Access your host's Docker install from inside a container when using Docker Compose. Installs Docker extension in the container along with needed CLIs.
- **[C# (.NET)](https://github.com/devcontainers/templates/tree/main/src/dotnet)** - Develop C# and .NET based applications. Includes all needed SDKs, extensions, and dependencies.
- **[F# (.NET)](https://github.com/devcontainers/templates/tree/main/src/dotnet-fsharp)** - Develop F# and .NET based applications. Includes all needed SDKs, extensions, and dependencies.
- **[C# (.NET) and MS SQL](https://github.com/devcontainers/templates/tree/main/src/dotnet-mssql)** - Develop C# and .NET Core based applications. Includes all needed SDKs, extensions, dependencies and an MS SQL container for parallel database development. Adds an additional MS SQL container to the C# (.NET Core) container definition and deploys any .dacpac files from the mssql .devcontainer folder.
- **[C# (.NET) and PostgreSQL](https://github.com/devcontainers/templates/tree/main/src/dotnet-postgres)** - Develop C# and .NET Core based applications. Includes all needed SDKs, extensions, dependencies and a PostgreSQL container for parallel database development. Adds an additional PostgreSQL container to the C# (.NET Core) container definition.
- **[Go](https://github.com/devcontainers/templates/tree/main/src/go)** - Develop Go based applications. Includes appropriate runtime args, Go, common tools, extensions, and dependencies.
- **[Go & PostgreSQL](https://github.com/devcontainers/templates/tree/main/src/go-postgres)** - Use and develop Go + Postgres applications. Includes appropriate runtime args, Go, common tools, extensions, and dependencies.
- **[Java](https://github.com/devcontainers/templates/tree/main/src/java)** - Develop Java applications. Includes the JDK and Java extensions.
- **[Java & PostgreSQL](https://github.com/devcontainers/templates/tree/main/src/java-postgres)** - Develop applications with Java and PostgreSQL. Includes a Java application container and PostgreSQL server.
- **[Node.js & JavaScript](https://github.com/devcontainers/templates/tree/main/src/javascript-node)** - Develop Node.js based applications. Includes Node.js, eslint, nvm, and yarn.
- **[Node.js & Mongo DB](https://github.com/devcontainers/templates/tree/main/src/javascript-node-mongo)** - Develop applications in Node.js and Mongo DB. Includes Node.js, eslint, and yarn in a container linked to a Mongo DB.
- **[Node.js & PostgreSQL](https://github.com/devcontainers/templates/tree/main/src/javascript-node-postgres)** - Develop applications in Node.js and PostgreSQL. Includes Node.js, eslint, and yarn in a container linked to a Postgres DB container
- **[Jekyll](https://github.com/devcontainers/templates/tree/main/src/jekyll)** - Develop static sites with Jekyll, includes everything you need to get up and running.
- **[Kubernetes - Local Configuration](https://github.com/devcontainers/templates/tree/main/src/kubernetes-helm)** - Access a local (or remote) Kubernetes cluster from inside a dev container using your local config. Includes kubectl, Helm, and the Docker CLI.
- **[Kubernetes - Minikube-in-Docker](https://github.com/devcontainers/templates/tree/main/src/kubernetes-helm-minikube)** - Access an embedded minikube instance or remote a Kubernetes cluster from inside a dev container. Includes kubectl, Helm, minikube, and the Docker.
- **[Markdown](https://github.com/devcontainers/templates/tree/main/src/markdown)** - A simple container for editing markdown.
- **[Miniconda (Python 3)](https://github.com/devcontainers/templates/tree/main/src/miniconda)** - Develop Miniconda applications in Python 3. Installs dependencies from your environment.yml file and the Python extension.
- **[Miniconda & PostgreSQL (Python 3)](https://github.com/devcontainers/templates/tree/main/src/miniconda-postgres)** - Develop Miniconda & PostgreSQL applications in Python 3. Installs dependencies from your environment.yml file and the Python extension.
- **[PHP](https://github.com/devcontainers/templates/tree/main/src/php)** - Develop PHP based applications. Includes needed tools, extensions, and dependencies.
- **[PHP & MariaDB](https://github.com/devcontainers/templates/tree/main/src/php-mariadb)** - Develop PHP applications with MariaDB (MySQL Compatible).
- **[Python 3 & PostgreSQL](https://github.com/devcontainers/templates/tree/main/src/postgres)** - Develop applications with Python 3 and PostgreSQL. Includes a Python application container and PostgreSQL server.
- **[Powershell](https://github.com/devcontainers/templates/tree/main/src/powershell)** - Develop PowerShell scripts without installing anything locally.
- **[Python 3](https://github.com/devcontainers/templates/tree/main/src/python)** - Develop Python 3 applications.
- **[Ruby](https://github.com/devcontainers/templates/tree/main/src/ruby)** - Develop Ruby based applications. includes everything you need to get up and running.
- **[Ruby on Rails & Postgres](https://github.com/devcontainers/templates/tree/main/src/ruby-rails-postgres)** - Develop Ruby on Rails applications with Postgres. Includes a Rails application container and PostgreSQL server.
- **[Rust](https://github.com/devcontainers/templates/tree/main/src/rust)** - Develop Rust based applications. Includes appropriate runtime args and everything you need to get up and running.
- **[Rust & PostgreSQL](https://github.com/devcontainers/templates/tree/main/src/rust-postgres)** - Develop applications with Rust and PostgreSQL. Includes a Rust application container and PostgreSQL server.
- **[Node.js & TypeScript](https://github.com/devcontainers/templates/tree/main/src/typescript-node)** - Develop Node.js based applications in TypeScript. Includes Node.js, eslint, nvm, yarn, and the TypeScript compiler.
- **[Ubuntu](https://github.com/devcontainers/templates/tree/main/src/ubuntu)** - A simple Ubuntu container with Git and other common utilities installed.
- **[Default Linux Universal](https://github.com/devcontainers/templates/tree/main/src/universal)** - Use or extend the new Ubuntu-based default, large, multi-language universal container for GitHub Codespaces.

<!-- END_TEMPLATE_LIST -->
<!-- prettier-ignore-end -->
