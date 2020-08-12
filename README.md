# Auto Generate NPMRC Dot File

This action auto generate NPMRC For Project while need to install the private package inside the github actions workspace

## Inputs

### `token`

**Required** The token of the npmrc. Default `"xxxx"`.

### `name-repo`

**Required** The name of the npmrc. Default `"louis"`.


## Example usage

uses: actions/generatenpmrc@v1\
with:\
&nbsp;&nbsp;token: 'abcxyz'\
&nbsp;&nbsp;name-repo: 'dev'
