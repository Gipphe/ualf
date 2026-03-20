{
  lib,
  buildNpmPackage,
}:
buildNpmPackage {
  name = "ualf";
  src = ./.;
  npmDepsHash = "sha256-xbn40TykTRVNh08BywHTNZ6PqL0GvKCAl0DkmQJNuj0=";
  meta = {
    description = "A tiny package for parsing LLPS/CGLSS (UALF) strings.";
    homepage = "https://github.com/Gipphe/ualf";
    license = lib.licenses.mit;
  };
}
