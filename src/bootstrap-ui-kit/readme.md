# This will serve as the instructions for the users to work on it

All the components to come should be in bootstrap

The folder name should tell the direct name of the module or the component it is to contain.

A module is something that contains multiple components in itself. A module can have a component folder for itself if those components
are not used elsewhere.

A component cannot have a sub folder with it.

The name of the component shouldn't be ambigous like ProjectNameTable, NewSidebar. The name should either mention the functionality,placement
in ui or the direct purpose of that component.

There should be no redundant pieces of code. The functionality that can be performed in 2 lines shouldn't use up more than that.

Props drilling should be kept at a bare minimum. Use contexts since they are better when passing data at a global stage.
