function FindProxyForURL(url, host)
{
  if (shExpMatch(url, "rai*.akamaized.net/*")) {
    return "SOCKS localhost:8080";
  } else {
    return "DIRECT";
  }
}