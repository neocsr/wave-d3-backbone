#!/usr/bin/ruby

require 'webrick'
include WEBrick

def start_webrick(config = {})
  config.update(:Port => 4567)
  server = HTTPServer.new(config)

  yield server if block_given?
  ['INT', 'TERM'].each do |signal|
    trap(signal) { server.shutdown }
  end

  server.start
end

start_webrick(:DocumentRoot => './public')