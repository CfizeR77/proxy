function FindProxyForURL(url, host) {
  proxy = "SOCKS 127.0.0.1:8080"

  // Setup proxy filters.
  // - Use `host` for IP addresses and domain names.
  // - Use `url` for more control over the entire URL (i.e. sub paths).
  // - Protip: Use the above debugging log to determine the `url` and `host` for
  //   a given page.
  // - Protip 2: If you add an entry for your server to `/etc/hosts` in the form of
  //   `IP_address domain_name_url alias`, the `host` can be matched to the `alias`.
  if (shExpMatch(url, "raiuno1-live.akamaized.net")) {
    // Route through server.
    return proxy;
  }

  // Route everything else directly!
  return "DIRECT";
}
