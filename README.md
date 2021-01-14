# Auto Generate NPMRC Dot File

This action auto generate NPMRC For Project while need to install the private package inside the github actions workspace

## Inputs

### `token`

**Required** The token of the npmrc. Default `"xxxx"`.

### `name-repo`

**Required** The name of the npmrc. Default `"louis"`.

### `working directory`

**Required** The working directory of the npmrc. Default `"."`.

## Example usage
```
- name: Generate .npmrc
  uses: actions/generatenpmrc@v1
    with:
      token: ${{ secrets.NPMRC_TOKEN }}
      name-repo: dev
      working directory: ${{ github.workspace }}
```
