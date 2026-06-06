{
  description = "";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    systems.url = "github:nix-systems/default";
    flake-utils = {
      url = "github:numtide/flake-utils";
      inputs.systems.follows = "systems";
    };
  };

  outputs =
    { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
          config.cudaSupport = true;
        };
      in
      {
        devShell = pkgs.mkShellNoCC {
          name = "architeus deux (stolen from somewhere)";
          buildInputs = with pkgs; [
            nodejs
            yarn
            typescript-language-server
            prettier
            python313
            ergogen
          ];

          LD_LIBRARY_PATH = "${
            pkgs.lib.makeLibraryPath [
              pkgs.stdenv.cc.cc.lib
              pkgs.stdenv.cc.libc # For standard C library headers
              pkgs.zlib
              pkgs.glib.out
              pkgs.fontconfig
            ]
          }:$LD_LIBRARY_PATH";
        };

      }
    );
}
